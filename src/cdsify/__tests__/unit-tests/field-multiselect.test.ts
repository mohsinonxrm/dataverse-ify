/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
import { sdkify, odataify } from "../..";
import { accountMetadata, Account } from "../../../cds-generated/entities/Account";
import { setMetadataCache } from "../../..";
import { socialprofile_community } from "../../../cds-generated/enums/socialprofile_community";

test("sdkify Multiselects", async () => {
  const accountSdk = {
    logicalName: accountMetadata.logicalName,
    name: "Account 1",
    cdsify_multiselect: [socialprofile_community.Facebook, socialprofile_community.Other],
  } as Account;

  const odata = odataify("Create", accountSdk);
  console.log(odata);
});

test("sdkify Multiselects", async () => {
  setMetadataCache({ entities: { account: accountMetadata } });
  const odataRecord = {
    "@odata.context": "https://org.crm11.dynamics.com/api/data/v9.1/$metadata#accounts/$entity",
    "@odata.etag": 'W/"24588414"',
    "cdsify_multiselect@OData.Community.Display.V1.FormattedValue": "Facebook",
    cdsify_multiselect: "1,2",
    name: "Account 1",
  };

  const sdkRecord = (await sdkify(odataRecord, "account")) as Account;

  expect(sdkRecord.cdsify_multiselect).toBeDefined();
  expect(sdkRecord.cdsify_multiselect?.length).toBe(2);
  expect(sdkRecord.cdsify_multiselect && sdkRecord.cdsify_multiselect[0]).toBe(socialprofile_community.Twitter);
  expect(sdkRecord.cdsify_multiselect && sdkRecord.cdsify_multiselect[1]).toBe(socialprofile_community.Facebook);
});
