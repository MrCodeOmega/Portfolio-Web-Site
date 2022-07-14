import { gql } from 'graphql-request';

import { graphcms } from "../arsaclient";

export const getAllArsa = async ()=> {

    const getAllProjectsQuery = gql`
     {
      arsalars {
        id
        ada
        description
        fiyat
        parsel
        tags
        title
        image {
          url
        }
      }
      }

    `;
   
        
  

    
      const {arsalars} = await  graphcms.request(getAllProjectsQuery);

      return arsalars;
}

