import React from 'react';
import { render } from 'react-dom';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './TopAmbassador.css';
import { Grid, Col } from 'react-bootstrap';


const content = [
	{	
		name: "Ian Swentowsky",
		image: "https://i.imgur.com/xn0tAVK.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget porta nisi. Morbi sit amet diam diam. In a arcu justo. Sed quis mauris vitae felis posuere mattis. Pellentesque turpis nibh, placerat eget magna a, rhoncus porttitor nibh. Sed suscipit leo et ultrices faucibus. Maecenas gravida, libero quis condimentum tincidunt, leo dui bibendum sapien, semper malesuada tellus est sed dolor. Nunc volutpat lacinia erat et imperdiet. Quisque dignissim in est sit amet bibendum. Ut ac pharetra augue, id tristique sapien. Vivamus convallis faucibus leo vitae fringilla.",
        video: "https://www.youtube.com/embed/yjhzq3A6LrU"
	
	},
	{
		
		name: "Andrew Smith",
		image: "https://i.imgur.com/OVIcF30.jpg",
		bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget porta nisi. Morbi sit amet diam diam. In a arcu justo. Sed quis mauris vitae felis posuere mattis. Pellentesque turpis nibh, placerat eget magna a, rhoncus porttitor nibh. Sed suscipit leo et ultrices faucibus. Maecenas gravida, libero quis condimentum tincidunt, leo dui bibendum sapien, semper malesuada tellus est sed dolor. Nunc volutpat lacinia erat et imperdiet. Quisque dignissim in est sit amet bibendum. Ut ac pharetra augue, id tristique sapien. Vivamus convallis faucibus leo vitae fringilla.",
        video: "https://www.youtube.com/embed/abhbtds-cqo"
    },
    
    {
		
		name: "Becca Ryan",
		image: "https://i.imgur.com/Pqsgm5l.jpg",
		bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget porta nisi. Morbi sit amet diam diam. In a arcu justo. Sed quis mauris vitae felis posuere mattis. Pellentesque turpis nibh, placerat eget magna a, rhoncus porttitor nibh. Sed suscipit leo et ultrices faucibus. Maecenas gravida, libero quis condimentum tincidunt, leo dui bibendum sapien, semper malesuada tellus est sed dolor. Nunc volutpat lacinia erat et imperdiet. Quisque dignissim in est sit amet bibendum. Ut ac pharetra augue, id tristique sapien. Vivamus convallis faucibus leo vitae fringilla.",
        video: "https://www.youtube.com/embed/tD4ZNhaqCyM"
    }
    
];

const TopAmbassador = () => (
	<div className="ambassador-container">
		
		
		<Grid>
        <h2 className="ambassadorHeader">Top Ambassadors</h2>
			{content.map((item, index) => (
				<div
					key={index}
					
				>
				<div className="flex-container">
						
						<div className="amHeader">
                    
                        </div>
                        <div className="imgTxtContainer">

                        <Col md={6} s={12} >
                        <img className="image" src={item.image} />
						</Col>
						
                        <Col md={6} xs={12} >
                        <div className="am-text">
                        
                        <h2 className="name">
						{item.name}
						</h2>
						<br></br>
                        <p className="bio">
                        {item.bio}
                        </p>

                        </div>
                        </Col>
                        </div>
                    `   
                        
                        <div className="video" >
                        
                        <div className="iframe-container">
                        <iframe width="560" height="315" src={item.video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        
                        </div>

                        </div>

                        <div className="button">
                        <button type="button">View Profile</button>
                        </div>

						</div>

					<br></br>
						

					</div>
					

            ))}
            
            </Grid>
	
	</div>
);

export default TopAmbassador;
