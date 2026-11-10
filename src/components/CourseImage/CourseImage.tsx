import type { Topic } from '../../data/courses';
import './CourseImage.css';

/** Course photo, desaturated and tinted by topic. Decorative (alt="") because the title sits next to it. */
export function CourseImage({ src, topic }: { src: string; topic: Topic }) {
  return (
    <div className={`c-course-image c-course-image--${topic}`}>
      <img src={src} alt="" loading="lazy" decoding="async" width={432} height={216} />
    </div>
  );
}
