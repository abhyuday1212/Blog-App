import React from "react";
import { useEffect, useState } from "react";
import { API } from "../../service/Api";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import PostData from "./PostData";

import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import CategoriesLoader from "../loader/CategoriesLoader"
// ---------------------------------

const StyledMainBox = styled(Box)`
 display: flex;
 flex-direction: row;
 width: 100%;
 height: fit-content;
margin: 2px 0px;
padding: 2px 2px;
overflow: hidden;
`;


const Posts = () => {

  // js
  const [posts, getPosts] = useState([]);

  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  // -*-*-*-*-*  Loader -*-*-*-*-*-*-*-*-*-*-*-**
  const [loaderVisible, setCategoriesLoaderVisible] = useState(false);

  const showCategoriesLoader = () => {
    setCategoriesLoaderVisible(true);
  };

  const hideCategoriesLoader = () => {
    setCategoriesLoaderVisible(false);
  };
  // -*-*-*-*-**-***-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**

  useEffect(() => {
    const fetchData = async () => {
      try {
        showCategoriesLoader()
        let response = await API.getAllPosts({ category: category || '' });
        if (response.isSuccess) {
          getPosts(response.data);
        }
      } catch (error) {
        console.log("Error fetching categories response");
      }
      finally {
        setTimeout(() => {
          hideCategoriesLoader();
        }, 600);
      }

      
    }

    fetchData();
  }, [category]);


  return (
    <>
      {loaderVisible && <CategoriesLoader />}
      {!loaderVisible && posts && posts.length > 0 ? posts.map(post => (
        <StyledMainBox   >
          
            <PostData post={post} />
        
        </StyledMainBox>
      )) : !loaderVisible ? (
        <Box style={{ color: '878787', margin: '30px 80px', fontSize: 18 }}>
          No data is available for the selected category
        </Box>
      ) : null}
    </>
  );
}

export default Posts;
