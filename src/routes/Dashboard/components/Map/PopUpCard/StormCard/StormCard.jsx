import React from 'react';
import { connect } from 'react-redux';
import { acknowledgeRecommendation } from 'routes/Dashboard/modules/Dashboard';
import classes from '../PopUpCard.scss';


const StormCard = (props) => {
  console.log(props);
  const {
    event,
    recommendations,
  } = props.storm;

  function handleRecommendation(id, approve) {
    if (approve) {
      console.log('approving shipment ', id);
      props.acknowledgeRecommendation();
    }
  }

  return (
    <div className={classes.contentContainer}>
      <div className={classes.iconTitleContainer}>
        <div>
          <img className={classes.weatherIcon} role="presentation" src="../storm.png" />
        </div>
        <div>
          <div>
            <h2>{event.event_desc}</h2>
          </div>

          <span className={classes.subtitle}>
        Severity:&nbsp;
      </span>
          {event.severity}
        </div>
      </div>


      <div className={classes.subtitle}>
        Suggested Shipments
      </div>
      <div>
        <small>
          Potential supply shortages due to weather.
          Consider sending additional supplies to affected locations.
        </small>
        {recommendations.map(recommendation =>
          <div className={classes.shipmentDialog}>
            <div className={classes.shipmentTitle}>
              Shipment from {recommendation.fromId} to {recommendation.toId}
            </div>
            <div className={classes.shipmentDialogActionContainer}>
              <div
                className={classes.shipmentDialogAction}
                onClick={() => handleRecommendation(recommendation._id, false)}
              >
                Reject
              </div>
              <div
                className={classes.shipmentDialogAction}
                onClick={() => handleRecommendation(recommendation._id, true)}
              >
                Approve
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

StormCard.propTypes = {
  storm: React.PropTypes.object.isRequired,
};

const mapStateToProps = () => ({
});

const mapActionCreators = {
  acknowledgeRecommendation,
};

export default connect(mapStateToProps, mapActionCreators)(StormCard);
