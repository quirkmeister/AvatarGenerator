import React from "react";
import db from "../../data/db.json";
import Box from "@mui/material/Box";
import { Icon } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from '@mui/material/Modal';
import Waitlist from "../Waitlist";
import { keyframes } from '@mui/system'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

const animated_text = keyframes`
	0% {
        background-position: 0% 50%;}
    100% {
        background-position: 100% 50%;
    }`

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius:'1rem',
  boxShadow: 24,
  p: 4,
};
 
const HeaderMob = () => {

	const [open, setOpen] = React.useState(false);
  	const handleOpen = () => setOpen(true);
  	const handleClose = () => setOpen(false);


	const AppStoreIcon = (
		<Icon sx={{ width: "100%", height: "100%", marginTop: "6px", paddingTop:"4px", paddingBottom:"3px"}}>
			<img alt="app_store" src="apple.svg" height={24} width={24}/>
		</Icon>
	);

	const downloadIcon = (
		<Icon sx={{ width: "100%", height: "100%", marginTop: "8x" }}>
			<img alt="play_store" src="play_store_mobile.svg" height={32} width={24}/>
		</Icon>
	);


	return (
		<>
			<Box sx={{ textAlign: "center" }}>
				<div style={{alignItems:"center", display:"flex",justifyContent:"center", marginTop:'2rem'}}>
					<a href="https://www.producthunt.com/posts/avatars-ai?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-avatars&#0045;ai" target="_blank" rel="noreferrer">
						<img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=401032&theme=dark&period=daily" alt="Avatars&#0032;AI - Personalised&#0032;AI&#0032;chat&#0032;companion&#0032;&#0045;&#0032;powered&#0032;by&#0032;GPT&#0045;4&#0032;&#0038;&#0032;Bard&#0032;AI | Product Hunt" style={{width: "200px", height: "43px"}} width="200" height="43" />
					</a>
            	</div>
				<Box sx={{  height: "60vh" }}>
					<img alt="header" src="mobile_header.svg" height="100%"  />
				</Box>
				
				<Typography variant="h4" component="div" sx={{ flexGrow: 1, marginTop: "2rem", fontWeight: "500" ,
						backgroundImage: `linear-gradient(to left, #ed8936, #ed64a6)`,
						WebkitBackgroundClip: "text",
						BackgroundClip: "text",
						WebkitTextFillColor: "transparent",
						TextFillColor: "transparent",
						backgroundSize:'500% auto',
						animation: `${animated_text} 1.5s ease-in-out infinite alternate;`
					}}>
					{db.appName}
				</Typography>

				{/* <Typography variant="h4" component="div" sx={{ flexGrow: 1, marginTop: "4rem", fontWeight: "500"}} >
					{db.appName}
				</Typography> */}
				<div style={{marginLeft:'0.5rem',marginRight:'0.5rem'}}>
					<Typography variant="body2" component="div" sx={{ flexGrow: 1, opacity: "0.5" , marginTop:'0.5rem'}} >
						{db.description_mob}
					</Typography>
					<Typography variant="body2" component="div" sx={{ flexGrow: 1, opacity: "0.5" }} >
						{db.description_mob_extend}
					</Typography>
					<Typography variant="body2" component="div" sx={{ flexGrow: 1, opacity: "0.5",marginTop:'0.5rem', marginLeft:'1rem',  marginRight:'1rem' }} >
						{db.descriptionNext}
					</Typography>
				</div>
				

				<div style={{display:'flex', justifyContent:'center', marginTop:'3rem', alignItems:'center'}}>
					<AvatarGroup max={5}>
						<Avatar alt="Remy" src="1.webp" sx={{ width: 36, height: 36 }} />
						<Avatar alt="Travis" src="2.webp" sx={{ width: 36, height: 36 }}/>
						<Avatar alt="Cindy" src="3.webp" sx={{ width: 36, height: 36 }}/>
						<Avatar alt="Walker" src="4.webp" sx={{ width: 36, height: 36 }}/>
						<Avatar alt="Alice" src="5.webp" sx={{ width: 36, height: 36 }} />
					</AvatarGroup>
					<div style={{marginLeft:'1rem'}}>
						<div style={{display:'flex'}}>
							<div data-sal="fade" data-sal-delay="100" data-sal-easing="ease"><img alt="star" src="star.svg" /></div>
							<div data-sal="fade" data-sal-delay="200" data-sal-easing="ease"><img alt="star" src="star.svg" /></div>
							<div data-sal="fade" data-sal-delay="300" data-sal-easing="ease"><img alt="star" src="star.svg" /></div>
							<div data-sal="fade" data-sal-delay="400" data-sal-easing="ease"><img alt="star" src="star.svg" /></div>
							<div data-sal="fade" data-sal-delay="500" data-sal-easing="ease"><img alt="star" src="star.svg" /></div>
						</div>
						<Typography variant="caption" component="div" sx={{ flexGrow: 1, opacity: "0.5", marginLeft:'0.1rem' }} >
							Loved by 2000+ users
						</Typography>
					</div>
				</div>
					
				<a href={db.appLink} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "#000000"}}>
          			<Button sx={{ textTransform: "none", fontFamily: `"Helvetica Neue", "Roboto", "sans-serif"`, marginTop: "6rem", background: "#FFFFFF",
						":hover": { bgcolor: "#FFFFFF", color: "#000000",boxShadow: "rgba(255, 255, 255, 0.21) 0px 0.755195px 3.77597px -0.75px, rgba(255, 255, 255, 0.204) 0px 1.93034px 9.65168px -1.5px, rgba(255, 255, 255, 0.192) 0px 3.86188px 19.3094px -2.25px, rgba(255, 255, 255, 0.173) 0px 7.32867px 36.6434px -3px, rgba(255, 255, 255, 0.13) 0px 14.554px 72.77px -3.75px, rgba(255, 255, 255, 0.024) 0px 32px 160px -4.5px, rgba(255, 255, 255, 0.16) 0px 16px 180px 0px"},
						borderRadius: "50px", paddingRight: "24px", paddingLeft: "32px", boxShadow: "rgba(255, 255, 255, 0.21) 0px 0.755195px 3.77597px -0.75px, rgba(255, 255, 255, 0.204) 0px 1.93034px 9.65168px -1.5px, rgba(255, 255, 255, 0.192) 0px 3.86188px 19.3094px -2.25px, rgba(255, 255, 255, 0.173) 0px 7.32867px 36.6434px -3px, rgba(255, 255, 255, 0.13) 0px 14.554px 72.77px -3.75px, rgba(255, 255, 255, 0.024) 0px 32px 160px -4.5px, rgba(255, 255, 255, 0.16) 0px 16px 180px 0px",}}
						variant="contained" startIcon={downloadIcon}>
							Download Now
					</Button>
        		</a>
			</Box>
			<Box sx={{ textAlign: "center" }}>
          		<Button variant="outlined" sx={{ textTransform: "none", fontFamily: `"Helvetica Neue", "Roboto", "sans-serif"`, marginTop: "1rem", 
					borderRadius: "50px", paddingRight: "32px", paddingLeft: "32px"}} color="secondary"
					startIcon={AppStoreIcon} onClick={handleOpen}>
						&nbsp;&nbsp; Join Waitlist
				</Button>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description">
					<Box sx={modalStyle}> 
						<Waitlist handleClose= {handleClose}/>
					</Box>
				</Modal>
			</Box>
		</>
	);
};

export default HeaderMob;
