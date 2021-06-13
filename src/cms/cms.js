import CMS from "netlify-cms-app";
import { UuidControl, UuidPreview } from "netlify-cms-widget-uuid-v4";
import { MdxControl, MdxPreview } from "netlify-cms-widget-mdx";

// import AboutPagePreview from "./preview-templates/AboutPagePreview";
// import BlogPostPreview from "./preview-templates/BlogPostPreview";
// import IndexPagePreview from "./preview-templates/IndexPagePreview";

CMS.registerWidget("uuid", UuidControl, UuidPreview);
CMS.registerWidget("mdx", MdxControl, MdxPreview);

// CMS.registerPreviewTemplate("index", IndexPagePreview);
// CMS.registerPreviewTemplate("about", AboutPagePreview);
// CMS.registerPreviewTemplate("blog", BlogPostPreview);
