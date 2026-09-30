/**
 * Display the six original thumbnail regions from the supplied screenshot.
 * The source bitmap is unchanged; SVG's viewport clips just the photo area.
 * Replace this with standalone image exports if the Figma assets become available.
 */
const thumbnailOffsets: Record<string, [number, number]> = {
  design: [14, 14],
  digital: [367, 14],
  data: [719, 14],
  productivity: [14, 376],
  finance: [367, 376],
  startup: [719, 376],
};

export default function CourseVisual({ image }: { image: string }) {
  const [x, y] = thumbnailOffsets[image] ?? thumbnailOffsets.design;
  return (
    <svg
      viewBox="0 0 291 166"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className="course-reference-visual"
    >
      <image href="/images/course-reference.png" x={-x} y={-y} width="1024" height="691" />
    </svg>
  );
}
