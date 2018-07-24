import React, {Component} from 'react';
import styled from 'styled-components';

const ExpertCard = styled.div`
  width: 336px;
  height: 343px;
  border-radius: 4px;
  margin-left: 40%;
  background-color: #ffffff;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
`;

const CoverImage = styled.img`
  width: 100%;
  height: 156px
  border-radius: 4px;
  background-size: cover;
`;

const ImageProfile = styled.div`
  border: 4px solid #fff;
  position: absolute;
  background: #000;
  left: calc(49.5% - 4px);
  margin-top: -40px;
  border-radius: 50%;
  width: 72px;
  height: 72px;
  z-index: 0;
`;
const ImageProfileComponent = styled.img`
    border-radius: 50%;
    width: 100%;
    height: 100%;
    background-size: cover;
`;
const ExpertName = styled.p`
  height: 18px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: #474747;
  margin-top: 46px;
  object-fit: contain;
`;
const ExpertDescription = styled.p`
  font-size: 14px;
  text-align: center;
  color: #474747;
  line-height: 1.5em;
  height: 3em;
  overflow: hidden;
  margin: 4px 0;
}
 `;

const AddressSection = styled.div`
  width: 152px;
  height: 23px;
  margin-top: 12px;
  margin-left: 22px;
  display: flex;
  white-space: nowrap;
`;


const ExpertAddress = styled.p`
  font-size: 12px;
  line-height: 1.17;
  text-align: left;
  color: #474747;
`;

const ExpertDistance = styled.p`
  font-size: 12px;
  line-height: 1.17;
  text-align: left;
  color: #474747;
  margin-left: 41px;
`;

const CategorySection = styled.div`
  width: 336px;
  height: 52px;
  border-radius: 4px;
  background-color: #ffffff;
  justify-content: center;
  display: flex;
  `;
const TagCategory = styled.button`
  width: 81px;
  height: 20px;
  border-radius: 10px;
  background-color: #f9e9ea;
  max-width: 131px;
  border: 0px;
`;

class Expert extends Component {

    state = {};

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch('http://apiriderr.20scoopscnx.com/api/experts/204')
            .then(response => response.json())
            .then((json) => {
                this.setState({
                    expert_name: json.data.expert_name,
                    profile_image: json.data.profile_image,
                    gallery_image: json.data.gallery_image[0],
                    short_description: json.data.short_description,
                    address: json.data.address,
                    category: json.data.category[0].name
                })
            })
            .catch(error => console.log('Fail to parsing api', error))
    }

    render() {
        const {
            expert_name,
            profile_image,
            gallery_image,
            short_description,
            address,
            category
        } = this.state
        return (
            <ExpertCard >
                <CoverImage src={gallery_image}/>
                <ImageProfile >
                    <ImageProfileComponent src={profile_image}/>
                </ImageProfile>
                <ExpertName>{expert_name} </ExpertName>
                <ExpertDescription> {short_description}</ExpertDescription>
                <AddressSection>
                    <ExpertAddress>Ort : {address}</ExpertAddress>
                    <ExpertDistance>Entfernung : 12 Km</ExpertDistance>
                </AddressSection>
                <CategorySection>
                    <TagCategory>{category}</TagCategory>
                </CategorySection>
            </ExpertCard>

        );
    }
}

export default Expert;
