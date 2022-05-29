import sanityClient from "@sanity/client";
import imageurlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "cvqurhsw",
  dataset: "production",
  apiVersion: "2022-05-06",
  useCdn: "true",
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageurlBuilder(client);

export const urlfor = (source) => builder.image(source);
