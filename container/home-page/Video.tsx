import { OptimizedVideo } from "@/components/OptimizedVideo";

export default function Video() {
	return <OptimizedVideo videosrc="/herobg.mp4" priority={true} autoPlay={false} />;
}
