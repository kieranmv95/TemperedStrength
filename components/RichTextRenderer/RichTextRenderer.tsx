import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document } from "@contentful/rich-text-types";
import Image from "next/image";

interface RichTextRendererProps {
  data: {
    json: Document;
    links?: any;
  };
}

const renderOption = (assets: any) => ({
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any, children: any) => {
      const assetId = node.data?.target?.sys?.id;
      const asset = assets.block.find((asset: any) => asset.sys.id === assetId);

      return (
        <div className="shadow-md md:shadow-xl">
          <Image
            src={asset.url}
            alt={asset.title}
            width={asset.width}
            height={asset.height}
          />
        </div>
      );
    },
    [BLOCKS.HEADING_3]: (node: any, children: any) => {
      return <h3 className="font-bold text-lg">{children}</h3>;
    },
    [BLOCKS.UL_LIST]: (node: any, children: any) => {
      return <ul className="list-disc pl-6">{children}</ul>;
    },
    [BLOCKS.LIST_ITEM]: (node: any, children: any) => {
      return <li className="mt-1">{children}</li>;
    },
  },
});

const RichTextRenderer = ({ data }: RichTextRendererProps) => {
  return (
    <>{documentToReactComponents(data.json, renderOption(data.links.assets))}</>
  );
};

export default RichTextRenderer;
