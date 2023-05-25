import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document } from "@contentful/rich-text-types";

interface RichTextRendererProps {
  data: {
    json: Document;
    links?: any;
  };
}

const RichTextRenderer = ({ data }: RichTextRendererProps) => {
  return <>{documentToReactComponents(data.json, {})}</>;
};

export default RichTextRenderer;
