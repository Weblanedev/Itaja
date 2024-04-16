import { createClient } from "@sanity/client"
const client = createClient({
  projectId: `${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`,
  dataset: "production",
  apiVersion: "2023-03-22",
  useCdn: false
});
export default client;