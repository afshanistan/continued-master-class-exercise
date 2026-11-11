import { useState } from 'react';
import type { Topic } from '../../data/courses';
import './CourseImage.css';

/** Course photo, desaturated and tinted by topic. Decorative (alt="") because the title sits next to it.
 *  M10: fades in when it finishes loading (lazy images used to pop in). */
export function CourseImage({ src, topic }: { src: string; topic: Topic }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`c-course-image c-course-image--${topic}${loaded ? ' is-loaded' : ''}`}>
      <img src={src} alt="" loading="lazy" decoding="async" width={432} height={216}
        ref={(img) => { if (img?.complete && img.naturalWidth > 0 && !loaded) setLoaded(true); }}
        onLoad={() => setLoaded(true)} />
    </div>
  );
}
