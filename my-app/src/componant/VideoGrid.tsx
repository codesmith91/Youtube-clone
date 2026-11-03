import { VideoCard } from "./VideoCard"

const VIDEOS =[{
        title:"How to learn coding in 30 days | 30 Days plan | Code with me",
        image: "pic.png",
        thumbImage: "thumb.png",
        author: "Codesmith",
        views: "100M",
        timestamp: "2 day ago"
},{
        title:"How to learn jumping in 30 days | 30 Days plan | Code with me",
        image: "pic.png",
        thumbImage: "thumb.png",
        author: "Codesmith",
        views: "100M",
        timestamp: "2 day ago"
},{
        title:"How to learn fucking in 30 days | 30 Days plan | Code with me",
        image: "pic.png",
        thumbImage: "thumb.png",
        author: "Codesmith",
        views: "100M",
        timestamp: "2 day ago"
}, {
        title:"How to learn fucking in 30 days | 30 Days plan | Code with me",
        image: "pic.png",
        thumbImage: "thumb.png",
        author: "Codesmith",
        views: "100M",
        timestamp: "2 day ago"
}, {
        title:"How to learn fucking in 30 days | 30 Days plan | Code with me",
        image: "pic.png",
        thumbImage: "thumb.png",
        author: "Codesmith",
        views: "100M",
        timestamp: "2 day ago"
}, {
        title:"How to learn fucking in 30 days | 30 Days plan | Code with me",
        image: "pic.png",
        thumbImage: "thumb.png",
        author: "Codesmith",
        views: "100M",
        timestamp: "2 day ago"
}, {
        title:"How to learn fucking in 30 days | 30 Days plan | Code with me",
        image: "pic.png",
        thumbImage: "thumb.png",
        author: "Codesmith",
        views: "100M",
        timestamp: "2 day ago"
}, {
        title:"How to learn fucking in 30 days | 30 Days plan | Code with me",
        image: "pic.png",
        thumbImage: "thumb.png",
        author: "Codesmith",
        views: "100M",
        timestamp: "2 day ago"
}]





export const  VideoGrid =() => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video => <div>
                  <VideoCard
                  title={video.title}
                  image={video.image}
                  thumbImage={video.thumbImage}
                  author={video.author}
                  views={video.views}
                  timestamp={video.timestamp}
                  ></VideoCard>
        </div>)}
    </div>
}