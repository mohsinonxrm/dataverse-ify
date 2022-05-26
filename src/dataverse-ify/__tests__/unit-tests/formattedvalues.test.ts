/* eslint-disable sonarjs/no-duplicate-string */
import { accountMetadata } from "../../../dataverse-gen/entities/Account";
import { setMetadataCache, sdkify } from "../../..";

test("sdkify lookups", async () => {
  setMetadataCache({ entities: { account: accountMetadata } });
  const accountOdata = {
    "@odata.context": "https://develop1v9demo.crm11.dynamics.com/api/data/v9.1/$metadata#accounts/$entity",
    // eslint-disable-next-line quotes
    "@odata.etag": 'W/"24587310"',
    "address1_latitude@OData.Community.Display.V1.FormattedValue": "1.00000",
    address1_latitude: 1,
    "merged@OData.Community.Display.V1.FormattedValue": "No",
    merged: false,
    "statecode@OData.Community.Display.V1.FormattedValue": "Active",
    statecode: 0,
    "exchangerate@OData.Community.Display.V1.FormattedValue": "1.0000000000",
    exchangerate: 1,
    "accountcategorycode@OData.Community.Display.V1.FormattedValue": "Preferred Customer",
    accountcategorycode: 1,
    name: "Account 1",
    "opendeals@OData.Community.Display.V1.FormattedValue": "0",
    opendeals: 0,
    "address1_utcoffset@OData.Community.Display.V1.FormattedValue": "1",
    address1_utcoffset: 1,
    "modifiedon@OData.Community.Display.V1.FormattedValue": "23/04/2020 09:59",
    modifiedon: "2020-04-23T09:59:45.000Z",
    "_owninguser_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
    _owninguser_value: "d3b787e3-8c39-48e6-97fc-26dfc14f104d",
    "_preferredsystemuserid_value@OData.Community.Display.V1.FormattedValue": "Scott Durow",
    "_preferredsystemuserid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
    _preferredsystemuserid_value: "d3b787e3-8c39-48e6-97fc-26dfc14f104d",
    "customersizecode@OData.Community.Display.V1.FormattedValue": "Default Value",
    customersizecode: 1,
    "openrevenue_state@OData.Community.Display.V1.FormattedValue": "1",
    openrevenue_state: 1,
    "donotpostalmail@OData.Community.Display.V1.FormattedValue": "Allow",
    donotpostalmail: false,
    "accountratingcode@OData.Community.Display.V1.FormattedValue": "Default Value",
    accountratingcode: 1,
    "marketingonly@OData.Community.Display.V1.FormattedValue": "No",
    marketingonly: false,
    "donotphone@OData.Community.Display.V1.FormattedValue": "Allow",
    donotphone: false,
    "preferredcontactmethodcode@OData.Community.Display.V1.FormattedValue": "Any",
    preferredcontactmethodcode: 1,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "Scott Durow",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
    _ownerid_value: "d3b787e3-8c39-48e6-97fc-26dfc14f104d",
    "openrevenue_date@OData.Community.Display.V1.FormattedValue": "23/04/2020 09:59",
    openrevenue_date: "2020-04-23T09:59:45.000Z",
    "address2_addresstypecode@OData.Community.Display.V1.FormattedValue": "Default Value",
    address2_addresstypecode: 1,
    "businesstypecode@OData.Community.Display.V1.FormattedValue": "Default Value",
    businesstypecode: 1,
    "donotemail@OData.Community.Display.V1.FormattedValue": "Allow",
    donotemail: false,
    "opendeals_state@OData.Community.Display.V1.FormattedValue": "1",
    opendeals_state: 1,
    "address2_shippingmethodcode@OData.Community.Display.V1.FormattedValue": "Default Value",
    address2_shippingmethodcode: 1,
    "openrevenue@OData.Community.Display.V1.FormattedValue": "$0.00",
    openrevenue: 0,
    "timezoneruleversionnumber@OData.Community.Display.V1.FormattedValue": "4",
    timezoneruleversionnumber: 4,
    address1_addressid: "8c988a09-43c9-428a-b551-e070469aee31",
    "address2_freighttermscode@OData.Community.Display.V1.FormattedValue": "Default Value",
    address2_freighttermscode: 1,
    "statuscode@OData.Community.Display.V1.FormattedValue": "Active",
    statuscode: 1,
    "createdon@OData.Community.Display.V1.FormattedValue": "23/04/2020 09:59",
    createdon: "2020-04-23T09:59:45.000Z",
    "msdyn_travelchargetype@OData.Community.Display.V1.FormattedValue": "None",
    msdyn_travelchargetype: 690970003,
    "creditlimit@OData.Community.Display.V1.FormattedValue": "$100.00",
    creditlimit: 100,
    "versionnumber@OData.Community.Display.V1.FormattedValue": "24,587,310",
    versionnumber: 24587310,
    "opendeals_date@OData.Community.Display.V1.FormattedValue": "23/04/2020 09:59",
    opendeals_date: "2020-04-23T09:59:45.000Z",
    "donotsendmm@OData.Community.Display.V1.FormattedValue": "Send",
    donotsendmm: false,
    "donotfax@OData.Community.Display.V1.FormattedValue": "Allow",
    donotfax: false,
    "donotbulkpostalmail@OData.Community.Display.V1.FormattedValue": "No",
    donotbulkpostalmail: false,
    "creditonhold@OData.Community.Display.V1.FormattedValue": "No",
    creditonhold: false,
    "_transactioncurrencyid_value@OData.Community.Display.V1.FormattedValue": "US Dollar",
    "_transactioncurrencyid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "transactioncurrencyid",
    "_transactioncurrencyid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "transactioncurrency",
    _transactioncurrencyid_value: "bc2134cf-0a06-e811-a8a6-00224801a491",
    accountid: "d6580424-4985-ea11-a811-00224801badc",
    "donotbulkemail@OData.Community.Display.V1.FormattedValue": "Allow",
    donotbulkemail: false,
    "creditlimit_base@OData.Community.Display.V1.FormattedValue": "$100.00",
    creditlimit_base: 100,
    "_modifiedby_value@OData.Community.Display.V1.FormattedValue": "Scott Durow",
    "_modifiedby_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
    _modifiedby_value: "d3b787e3-8c39-48e6-97fc-26dfc14f104d",
    "followemail@OData.Community.Display.V1.FormattedValue": "Allow",
    followemail: true,
    "shippingmethodcode@OData.Community.Display.V1.FormattedValue": "Default Value",
    shippingmethodcode: 1,
    "_createdby_value@OData.Community.Display.V1.FormattedValue": "Scott Durow",
    "_createdby_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
    _createdby_value: "d3b787e3-8c39-48e6-97fc-26dfc14f104d",
    "dev1_rollup_state@OData.Community.Display.V1.FormattedValue": "0",
    dev1_rollup_state: 0,
    "territorycode@OData.Community.Display.V1.FormattedValue": "Default Value",
    territorycode: 1,
    "lastonholdtime@OData.Community.Display.V1.FormattedValue": "23/04/2020 09:59",
    lastonholdtime: "2020-04-23T09:59:43.000Z",
    "msdyn_taxexempt@OData.Community.Display.V1.FormattedValue": "No",
    msdyn_taxexempt: false,
    "participatesinworkflow@OData.Community.Display.V1.FormattedValue": "No",
    participatesinworkflow: false,
    "accountclassificationcode@OData.Community.Display.V1.FormattedValue": "Default Value",
    accountclassificationcode: 1,
    "_owningbusinessunit_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "owningbusinessunit",
    "_owningbusinessunit_value@Microsoft.Dynamics.CRM.lookuplogicalname": "businessunit",
    _owningbusinessunit_value: "32466f8c-0206-e811-a8a6-00224801a491",
    address2_addressid: "9a5d7e5d-1111-479e-a07c-e2bbaab964ed",
    "dev1_accountlevel@OData.Community.Display.V1.FormattedValue": "Normal",
    dev1_accountlevel: 770760000,
  };

  const sdkAccount = await sdkify(accountOdata);

  const expected = {
    address1_latitude: 1,
    merged: false,
    statecode: 0,
    exchangerate: 1,
    accountcategorycode: 1,
    name: "Account 1",
    opendeals: 0,
    address1_utcoffset: 1,
    modifiedon: "2020-04-23T09:59:45.000Z",
    customersizecode: 1,
    openrevenue_state: 1,
    donotpostalmail: false,
    accountratingcode: 1,
    marketingonly: false,
    donotphone: false,
    preferredcontactmethodcode: 1,
    openrevenue_date: "2020-04-23T09:59:45.000Z",
    address2_addresstypecode: 1,
    businesstypecode: 1,
    donotemail: false,
    opendeals_state: 1,
    address2_shippingmethodcode: 1,
    openrevenue: 0,
    timezoneruleversionnumber: 4,
    address1_addressid: "8c988a09-43c9-428a-b551-e070469aee31",
    address2_freighttermscode: 1,
    statuscode: 1,
    createdon: "2020-04-23T09:59:45.000Z",
    msdyn_travelchargetype: 690970003,
    creditlimit: 100,
    versionnumber: 24587310,
    opendeals_date: "2020-04-23T09:59:45.000Z",
    donotsendmm: false,
    donotfax: false,
    donotbulkpostalmail: false,
    creditonhold: false,
    accountid: "d6580424-4985-ea11-a811-00224801badc",
    donotbulkemail: false,
    creditlimit_base: 100,
    followemail: true,
    shippingmethodcode: 1,
    dev1_rollup_state: 0,
    territorycode: 1,
    lastonholdtime: "2020-04-23T09:59:43.000Z",
    msdyn_taxexempt: false,
    participatesinworkflow: false,
    accountclassificationcode: 1,
    address2_addressid: "9a5d7e5d-1111-479e-a07c-e2bbaab964ed",
    dev1_accountlevel: 770760000,
    formattedValues: {
      address1_latitude: "1.00000",
      merged: "No",
      statecode: "Active",
      exchangerate: "1.0000000000",
      accountcategorycode: "Preferred Customer",
      opendeals: "0",
      address1_utcoffset: "1",
      modifiedon: "23/04/2020 09:59",
      _preferredsystemuserid_value: "Scott Durow",
      customersizecode: "Default Value",
      openrevenue_state: "1",
      donotpostalmail: "Allow",
      accountratingcode: "Default Value",
      marketingonly: "No",
      donotphone: "Allow",
      preferredcontactmethodcode: "Any",
      _ownerid_value: "Scott Durow",
      openrevenue_date: "23/04/2020 09:59",
      address2_addresstypecode: "Default Value",
      businesstypecode: "Default Value",
      donotemail: "Allow",
      opendeals_state: "1",
      address2_shippingmethodcode: "Default Value",
      openrevenue: "$0.00",
      timezoneruleversionnumber: "4",
      address2_freighttermscode: "Default Value",
      statuscode: "Active",
      createdon: "23/04/2020 09:59",
      msdyn_travelchargetype: "None",
      creditlimit: "$100.00",
      versionnumber: "24,587,310",
      opendeals_date: "23/04/2020 09:59",
      donotsendmm: "Send",
      donotfax: "Allow",
      donotbulkpostalmail: "No",
      creditonhold: "No",
      _transactioncurrencyid_value: "US Dollar",
      donotbulkemail: "Allow",
      creditlimit_base: "$100.00",
      _modifiedby_value: "Scott Durow",
      followemail: "Allow",
      shippingmethodcode: "Default Value",
      _createdby_value: "Scott Durow",
      dev1_rollup_state: "0",
      territorycode: "Default Value",
      lastonholdtime: "23/04/2020 09:59",
      msdyn_taxexempt: "No",
      participatesinworkflow: "No",
      accountclassificationcode: "Default Value",
      dev1_accountlevel: "Normal",
    },
    owninguser: {
      entityType: "systemuser",
      id: "d3b787e3-8c39-48e6-97fc-26dfc14f104d",
    },
    preferredsystemuserid: {
      entityType: "systemuser",
      id: "d3b787e3-8c39-48e6-97fc-26dfc14f104d",
      name: "Scott Durow",
    },
    ownerid: {
      entityType: "systemuser",
      id: "d3b787e3-8c39-48e6-97fc-26dfc14f104d",
      name: "Scott Durow",
    },
    transactioncurrencyid: {
      entityType: "transactioncurrency",
      id: "bc2134cf-0a06-e811-a8a6-00224801a491",
      name: "US Dollar",
    },
    modifiedby: {
      entityType: "systemuser",
      id: "d3b787e3-8c39-48e6-97fc-26dfc14f104d",
      name: "Scott Durow",
    },
    createdby: {
      entityType: "systemuser",
      id: "d3b787e3-8c39-48e6-97fc-26dfc14f104d",
      name: "Scott Durow",
    },
    owningbusinessunit: {
      entityType: "businessunit",
      id: "32466f8c-0206-e811-a8a6-00224801a491",
    },
  };

  expect(JSON.stringify(sdkAccount)).toBe(JSON.stringify(expected));
});
