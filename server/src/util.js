const _ = require('lodash');

module.exports = {
  formatResponse: function(response) {
    let itineraries = [];
    for (let i = 0; i < response["Itineraries"].length; i++) {
      const OutboundLeg = _.find(response["Legs"], {Id: response["Itineraries"][i]["OutboundLegId"]});
      const InboundLeg = _.find(response["Legs"], {Id: response["Itineraries"][i]["InboundLegId"]});

      OutboundLeg["Segments"] = getSegments(response, OutboundLeg);
      OutboundLeg["DestinationStationCode"] = (_.find(response["Places"], {Id: OutboundLeg["DestinationStation"]}))["Code"];
      OutboundLeg["OriginStationCode"] = (_.find(response["Places"], {Id: OutboundLeg["OriginStation"]}))["Code"];
      OutboundLeg["stopsStations"] = getStopStations(response, OutboundLeg);

      InboundLeg["Segments"] = getSegments(response, InboundLeg);
      InboundLeg["DestinationStationCode"] = (_.find(response["Places"], {Id: InboundLeg["DestinationStation"]}))["Code"];
      InboundLeg["OriginStationCode"] = (_.find(response["Places"], {Id: InboundLeg["OriginStation"]}))["Code"];
      InboundLeg["stopsStations"] = getStopStations(response, InboundLeg);

      const tempItenrary = {
        OutboundLeg: OutboundLeg,
        InboundLeg: InboundLeg,
        pricingOptions: getPricingOptions(i, response),
      };
      itineraries.push(tempItenrary);
    }
    const beautifulResult = {
      itineraries: itineraries,
      currencySymbol: response["Currencies"][0]["Symbol"]
    };
    return (beautifulResult);
  }
};

const getSegments = (response, leg) => {
  let segments = [];
  for (let j = 0; j < leg["SegmentIds"].length; j++) {
    let tempSegment = _.find(response["Segments"], {Id: leg["SegmentIds"][j]});
    tempSegment["OriginCode"] = (_.find(response["Places"], {Id: tempSegment["OriginStation"]}))["Code"];
    tempSegment["DestinationCode"] = (_.find(response["Places"], {Id: tempSegment["DestinationStation"]}))["Code"];
    segments.push(tempSegment);
  }
  return segments;
};
const getStopStations = (response, leg) => {
  let stopsStations = [];
  for (let j = 0; j < leg["Stops"].length; j++) {
    stopsStations.push((_.find(response["Places"], {Id: leg["Stops"][j]}))["Code"]);
  }
  return (stopsStations);
};

const getPricingOptions = (index, response) => {
  let pricingOptions = [];
  for (let j = 0; j < response["Itineraries"][index]["PricingOptions"].length; j++) {
    const agentID = response["Itineraries"][index]["PricingOptions"][j]["Agents"][0]
    const tempAgent = _.find(response["Agents"], {Id: agentID});
    const tempPrice = response["Itineraries"][index]["PricingOptions"][j]["Price"];
    let tempPricingOption = {Agent: tempAgent["Name"], Price: tempPrice};
    pricingOptions.push(tempPricingOption);
  }
  return (pricingOptions);
};
