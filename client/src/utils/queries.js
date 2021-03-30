import gql from 'graphql-tag';

//GET_ME, which will execute the me query set up using Apollo Server.
export const GET_ME = gql`
  {
        me {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                title
                description
                image
                link
            }
        }
    }
` ;

