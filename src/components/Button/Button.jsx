export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
