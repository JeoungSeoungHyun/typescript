{
    type Video = {
        id: string;
        title: string;
        url: string;
        data: string;
    };

    type VideoMetaData =  Omit<Video, 'url' | 'data'>;

    function getVideo2(id: string): Video {
        return {
            id,
            title: 'video',
            url: 'https://..',
            data: 'byte-data..',
        };
    }

    function getVideoMetadata2(id: string): VideoMetaData{
        return {
            id: id,
            title: 'title',
        }
    }
}