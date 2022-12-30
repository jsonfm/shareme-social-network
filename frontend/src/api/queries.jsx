export const getPinsQuery = `*[_type == "pin"] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
        _id,
        destination,
        postedBy->{
          _id,
          username,
          image
        },
        save[]{
          _key,
          postedBy->{
            _id,
            username,
            image
          },
        },
} `;


export const pinDetailQuery = (pinId) => {
    const query = `*[_type == "pin" && _id == '${pinId}']{
      image{
        asset->{
          url
        }
      },
      _id,
      title, 
      about,
      category,
      destination,
      postedBy->{
        _id,
        username,
        image
      },
     save[]{
        postedBy->{
          _id,
          username,
          image
        },
      },
      comments[]{
        comment,
        _key,
        postedBy->{
          _id,
          username,
          image
        },
      }
    }`;
    return query;
};