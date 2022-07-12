import { Client } from "postgres";

let config = "postgres://yuiolgxd:Zq74w9OKmQ8jo4W7CS7NT9flwm8xk1FT@heffalump.db.elephantsql.com/yuiolgxd";

const client = new Client(config);

await client.connect();

export default client;