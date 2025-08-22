import Video from 'next-video';
import herobg from '/videos/herobg.mp4';

export default function VideoSection() {
	return <Video src={herobg} />;
}
