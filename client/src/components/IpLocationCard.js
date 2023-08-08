import React, { useState } from 'react';

// import material ui components
import { Link, Grid, CardContent, CardActions, Divider, Tooltip } from '@mui/material';

// import material ui icons
import PublicIcon from '@mui/icons-material/Public';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

// import helper classes 
import LoadingCircle from './LoadingCircle';
import API from './../utils/Api';
import { regIpv4, regIpv6 } from './../utils/Regex';

// import style 
import { StyledCard, StyledButton, StyledTextField, StyledChip } from './../style';

const API_ENDPOINT = 'api/ip-address';
const GOOGLE_MAPS_URL = 'https://www.google.com/maps?q=';

function IpLocationCard() {
    const [ipAddress, setIpAddress] = useState('');
    const [location, setLocation] = useState({
        city: '',
        country: ''
    });
    const [isValid, setIsValid] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [showResults, setShowResults] = useState(false);

    const handleChange = (e) => {
        setIpAddress(e.target.value);
        setShowResults(false);
        setIsValid(true);
    };

    const submitForm = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // check if the ip is correct 
        if (!(regIpv4.test(ipAddress) || regIpv6.test(ipAddress))) {
            setIsValid(false);
            setIsLoading(false);
            return;
        }

        try {
            // Axios request
            let response = await API.get(API_ENDPOINT, { params: { ip: ipAddress } });

            // console.log(`response => ${response}`);

            let data = await response?.data;

            // console.log(`data => ${data}`);

            let country = data.data?.country;
            let city = data.data?.city;

            if (!country || country === "" || !city || city === "") {
                setIsValid(false);
                setShowResults(false);
            }
            else {
                setLocation({ city, country });
                setIsValid(true);
                setShowResults(true);
            }

            setIsLoading(false);
        } catch (error) {
            setShowResults(false);
            setIsLoading(false);
            setIsValid(false);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
            <StyledCard variant="outlined" style={{ my: 10, mx: 2 }}>
                <CardContent>
                    {isLoading && <LoadingCircle />}
                    <form onSubmit={submitForm}>
                        <StyledTextField
                            required
                            id="ip-address"
                            label="IP address"
                            placeholder="127.0.0.1"
                            helperText={!isValid && "Only IPv4 or IPv6"}
                            value={ipAddress}
                            margin="normal"
                            size="small"
                            fullWidth
                            onChange={handleChange}
                            error={!isValid}
                        />
                        <StyledButton type='submit' variant="contained" color="secondary" fullWidth startIcon={<TravelExploreIcon />}>
                        </StyledButton>
                    </form>
                </CardContent>
                {showResults && <Divider variant="middle" />}
                {showResults && <CardActions>
                    <Grid container spacing={1} justifyContent={'center'} >
                        <Grid item>
                            <Tooltip title="Country" arrow>
                                <StyledChip icon={<PublicIcon />}
                                    label={location.country}
                                    color="secondary"
                                    variant="outlined"
                                    target="_blank"
                                    component={Link}
                                    href={`${GOOGLE_MAPS_URL}${location.country}`}
                                    clickable
                                />
                            </Tooltip>
                        </Grid>
                        <Grid item>
                            <Tooltip title="City" arrow>
                                <StyledChip
                                    icon={<LocationCityIcon />}
                                    color="secondary"
                                    label={location.city}
                                    variant="outlined"
                                    target="_blank"
                                    component={Link}
                                    href={`${GOOGLE_MAPS_URL}${location.city}`}
                                    clickable
                                />
                            </Tooltip>
                        </Grid>
                    </Grid>
                </CardActions>}
            </StyledCard>
        </div >
    );
}

export default IpLocationCard;