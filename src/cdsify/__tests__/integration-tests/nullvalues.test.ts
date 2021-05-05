/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { SetupGlobalContext } from "../../../cdsnode/SetupGlobalContext";
import { setMetadataCache } from "../../../metadata/MetadataCache";
import { accountMetadata, Account } from "../../../cds-generated/entities/Account";
import { whoAmI } from "../../../cdsnode/whoAmI";
import { EntityReference } from "../../../types/EntityReference";
import { XrmContextCdsServiceClient } from "../../CdsServiceClient/XrmContextServiceClient";
import * as config from "config";
import { NodeXrmConfig } from "../../../cdsnode/config/NodeXrmConfig";
import { account_account_accountcategorycode } from "../../../cds-generated/enums/account_account_accountcategorycode";
import { socialprofile_community } from "../../../cds-generated/enums/socialprofile_community";
describe("create", () => {
  const configFile = config.get("nodecds") as NodeXrmConfig;
  beforeAll(async () => {
    if (!configFile.runIntegrationTests) return;
    // Is this running inside NodeJS?
    if (typeof Xrm == "undefined") {
      try {
        // Set up the Node Xrm global context
        await SetupGlobalContext();
      } catch (ex) {
        fail(ex);
      }
    }
  }, 10000);
  test("Create an account", async () => {
    if (!configFile.runIntegrationTests) return;
    const userId = await whoAmI();

    // Create an account with sdk types
    setMetadataCache({
      entities: {
        account: accountMetadata,
      },
    });

    const account1 = {
      logicalName: accountMetadata.logicalName,
      name: "Account 1",
      description: "Description",
      // Optionset
      accountcategorycode: account_account_accountcategorycode.PreferredCustomer,
      // Money
      creditlimit: 100,
      // Double
      address1_latitude: 1.0,
      // Integer (check forced to int)
      address1_utcoffset: 1.5,
      // DateTime
      lastonholdtime: new Date(),
      // EntityReference
      preferredsystemuserid: new EntityReference("systemuser", userId),
      // MutliSelect
      cdsify_multiselect: [socialprofile_community.Twitter, socialprofile_community.Facebook],
    } as Account;

    // Create
    const cdsServiceClient = new XrmContextCdsServiceClient(Xrm.WebApi);
    account1.accountid = await cdsServiceClient.create(account1);

    // Retrieve
    const account1Retreived = (await cdsServiceClient.retrieve("account", account1.accountid, true)) as Account;
    expect(account1Retreived.description).toBe(account1.description);
    expect(account1Retreived.accountcategorycode).toBe(account1.accountcategorycode);
    expect(account1Retreived.creditlimit).toBe(account1.creditlimit);
    expect(account1Retreived.address1_latitude).toBe(account1.address1_latitude);
    expect(account1Retreived.lastonholdtime?.toLocaleDateString()).toBe(account1?.lastonholdtime?.toLocaleDateString());
    expect(account1Retreived.preferredsystemuserid?.id).toBe(account1.preferredsystemuserid?.id);
    expect(account1Retreived.preferredsystemuserid?.entityType).toBe(account1.preferredsystemuserid?.entityType);
    expect(account1Retreived.preferredsystemuserid?.name).toBeDefined();
    expect(account1Retreived.telephone1).toBeNull();
    try {
      // Null values
      account1.description = null;
      account1.preferredsystemuserid = null; // The cdsServiceClient has special functionality to delete the lookups
      await cdsServiceClient.update(account1);

      // Retrieve Updated
      const account1Retreived2 = (await cdsServiceClient.retrieve("account", account1.accountid, true)) as Account;
      expect(account1Retreived2.description).toBeNull();
      // Because a lookup value comes in as null we can't figure out the entity reference lookup type
      // so we get an undefined value not null
      expect(account1Retreived2.preferredsystemuserid).toBeUndefined();
    } finally {
      // Delete
      await cdsServiceClient.delete("account", account1.accountid);
    }
  }, 10000);
});
