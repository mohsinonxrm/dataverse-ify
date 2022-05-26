import { getEntitySetName } from "../metadata/MetadataCache";
import { IEntity } from "./IEntity";
import { EntityReference } from "./EntityReference";
export class Entity {
  static containsFields(instance: unknown, keys: string[]): boolean {
    let allOk = true;
    for (const key of keys) {
      // eslint-disable-next-line no-prototype-builtins
      allOk = allOk && (instance as object).hasOwnProperty(key);
      if (!allOk) break;
    }
    return allOk;
  }
  static async getCollectionNameForEntity(logicalName: string): Promise<string> {
    // Try using the simple collection name lookup
    return await getEntitySetName(logicalName);
  }
  static toEntityReference(instance: IEntity): EntityReference {
    return new EntityReference(instance.logicalName, instance.id);
  }
}
