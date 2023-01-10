let azure:any;

export class StorageAccount {
    constructor(){
        const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
        const exampleAccount = new azure.storage.Account("exampleAccount", {
            resourceGroupName: exampleResourceGroup.name,
            location: exampleResourceGroup.location,
            accountTier: "Standard",
            accountReplicationType: "GRS",
            tags: {
                environment: "staging",
            },
        });
    }
}