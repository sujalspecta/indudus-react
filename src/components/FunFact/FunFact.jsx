import React from 'react';
import CountUpComponent from 'react-countup';
const CountUp = CountUpComponent.default || CountUpComponent

const FunFactSection = () => {
    return (
        <div className="wpo-fun-fact-section">
            <div className="row">
                <div className="col col-xs-12">
                    <div className="wpo-fun-fact-grids clearfix">
                        <div className="grid">
                            <div className="info">
                                <h3><CountUp end={300} enableScrollSpy/>+</h3>
                                <p>Happy Clients</p>
                            </div>
                        </div>
                        <div className="grid">
                            <div className="info">
                                <h3><CountUp end={50} enableScrollSpy/></h3>
                                <p>Team Member</p>
                            </div>
                        </div>
                        <div className="grid">
                            <div className="info">
                                <h3><CountUp end={360} enableScrollSpy/>+</h3>
                                <p>Complete Project</p>
                            </div>
                        </div>
                        <div className="grid">
                            <div className="info">
                                <h3><CountUp end={165} enableScrollSpy/>+</h3>
                                <p>5 Star Rating</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FunFactSection;