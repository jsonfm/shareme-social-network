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