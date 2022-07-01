import { Class2 } from "./Class";
import { Users } from "./User";
declare const entities: (typeof Users | typeof Class2)[];
export { Class2, Users };
export default entities;
