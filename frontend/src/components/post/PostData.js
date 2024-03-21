import React from "react";
import { Link } from "react-router-dom";
import { addElippsis } from "../../utils/frontend-utils";
// ----------------------
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";


// --------------------------
const Container = styled(Box)`
  width: 100%;
  height: 11.4rem;
  border: 1px solid #d3cede;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  & > img,
  & > p {
    padding: 0 1px 1px 1px;
  }
`;

const StyledCardContent = styled(CardContent)`
  positon:relative;
  height:100%;
`;

const Image = styled('img')({
    aspectRatio: "4/3",
    objectFit: "content",
    border:"1px solid #d3cede",
    borderRadius: "10px 10px 6px 6px",
    height: "11.2rem"
});
 
const Details = styled(Typography)`
  font-size: 14px;
  word-break: break-word;
`;




// --------------------------

const PostData = ({ post }) => {

    const url = post.picture ? post.picture : 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'

    // ------------------------
    return (
        <>
            <Container>
                <StyledCardContent
                    style={{
                        width: "100%",
                        padding: "2.5px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}>

                    <Image
                        src={post.picture || url}
                        component="img"

                    />

                    <div className="sideContent" style={{
                        height: "100%",
                        width: "76.8%",
                        position: "relative"
                    }}>


                        <Typography gutterBottom component="div"
                            style={{
                                height: "fitContent",
                                fontSize: "17px",
                                fontWeight: "750"

                            }}
                        >

                            <span><b>Title: </b> {addElippsis(post.title, 27)}</span> 
                        </Typography>



                        <Typography
                            style={{
                                height: "fitContent",
                                fontSize: "17px",
                                fontWeight: "400"
                            }}>
                            <span><b>Author: </b>  {post.name}</span> 
                        </Typography>



                        <Typography
                            style={{
                                height: "fitContent",
                                fontSize: "17px",
                                fontWeight: "400"

                            }}>
                            <span><b>Email: </b></span>  {post.email}
                        </Typography>


                        <Typography
                            style={{
                                height: "fitContent",
                                fontSize: "17px",
                                fontWeight: "400"

                            }}>
                            <span><b>Category : </b></span>   {post.categories}
                        </Typography>


                        <Details variant="body2"
                            style={{
                                height: "fitContent",
                                fontSize: "17px",
                                fontWeight: "400",
                                position: "absolute",
                            }}>
                            {addElippsis(post.summary, 130)}
                        </Details>
 
                        <Link to={`details/${post._id}`}>
                            <Button className="bg-[#00df9a] rounded-md hover:text-[crimson] hover:bg-[white] hover:border-[black]  w-[110px] py-2 text-black  font-medium my-0 mx-auto  "
                                sx={{ 
                                    position: "absolute",
                                    bottom: "0",
                                    right:"0",
                                }}
                            >
                                <b>Read more</b>    
                            </Button>

                        </Link>

                    </div>
                </StyledCardContent>
            </Container>
        </>
    )
}
export default PostData;