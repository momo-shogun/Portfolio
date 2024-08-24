import React from "react";

const Image = ({
  src,
  alt,
  width,
  height,
  layout = "responsive",
  objectFit = "cover",
  ...props
}) => {
  const styles = {
    width: layout === "fill" ? "100%" : width ? `${width}px` : "100%",
    height: layout === "fill" ? "100%" : height ? `${height}px` : "auto",
    objectFit,
    display: "block",
  };

  return (
    <div
      style={{
        position: "relative",
        width: layout === "fill" ? "100%" : width ? `${width}px` : "100%",
        height: layout === "fill" ? "100%" : height ? `${height}px` : "auto",
        overflow: "hidden",
      }}
    >
      <img
        src={src}
        alt={alt}
        style={styles}
        loading="lazy" // Adds lazy loading
        {...props} // Spread other props like className, onClick, etc.
      />
    </div>
  );
};

export default Image;
