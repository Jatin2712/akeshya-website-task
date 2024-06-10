"use client";

import React, { useEffect, useState } from "react";

interface HtmlRendererProps {
  src: string;
}

const HtmlRenderer: React.FC<HtmlRendererProps> = ({ src }) => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    fetch(src)
      .then((response) => response.text())
      .then((html) => setHtmlContent(html))
      .catch((error) => console.error("Error loading HTML content:", error));
  }, [src]);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default HtmlRenderer;
