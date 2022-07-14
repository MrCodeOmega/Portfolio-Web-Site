import { gql } from 'graphql-request';

import { graphcms } from "../client";

export const getAllProjects = async ()=> {

    const getAllProjectsQuery = gql`
     {
        projects {
          title
          id
          tags
          desc
          source
          image {
            url
          }
        }
      }

    `;
   
        
  

    
      const {projects} = await  graphcms.request(getAllProjectsQuery);

      return projects;
}

