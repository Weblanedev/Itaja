
import imageUrlBuilder from "@sanity/image-url"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import client from "../../libs/api/client";

const imgBuilder = imageUrlBuilder(client)
const urlFor = (source: SanityImageSource) => imgBuilder.image(source);
export default urlFor;