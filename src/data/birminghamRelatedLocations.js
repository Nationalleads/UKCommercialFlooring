export const birminghamRelatedLocations = {
  // Central
  "birmingham-city-centre": ["digbeth", "jewellery-quarter", "ladywood", "highgate"],
  "digbeth": ["birmingham-city-centre", "highgate", "bordesley-green"],
  "jewellery-quarter": ["birmingham-city-centre", "ladywood", "hockley"],
  "ladywood": ["birmingham-city-centre", "jewellery-quarter", "edgbaston"],
  
  // South
  "edgbaston": ["harborne", "moseley", "selly-oak"],
  "moseley": ["kings-heath", "edgbaston", "balsall-heath"],
  "kings-heath": ["moseley", "stirchley", "billesley"],
  "harborne": ["edgbaston", "quinton", "selly-oak"],
  "selly-oak": ["bournville", "edgbaston", "weoley-castle"],
  "bournville": ["selly-oak", "stirchley", "cotteridge", "kings-norton"],
  "northfield": ["longbridge", "kings-norton", "frankley"],
  "longbridge": ["northfield", "rubery", "rednal"],
  
  // North
  "sutton-coldfield": ["four-oaks", "mere-green", "wylde-green", "walmley"],
  "erdington": ["stockland-green", "gravelly-hill", "kingstanding"],
  "perry-barr": ["great-barr", "handsworth", "witton"],
  "great-barr": ["perry-barr", "kingstanding", "hamstead"],
  "handsworth": ["lozells", "handsworth-wood", "soho"],
  
  // East
  "alum-rock": ["washwood-heath", "saltley", "ward-end"],
  "yardley": ["sheldon", "acocks-green", "stechford"],
  "acocks-green": ["yardley", "hall-green", "olton"],
  "small-heath": ["bordesley-green", "sparkbrook", "tyseley"],
  
  // West & Others
  "sparkbrook": ["balsall-heath", "sparkhill", "small-heath"],
  "sparkhill": ["hall-green", "sparkbrook", "moseley"],
  "balsall-heath": ["moseley", "sparkbrook", "edgbaston"],
  
  // Default fallbacks for generated connections if not explicitly defined above
  "default": ["birmingham-city-centre", "edgbaston", "sutton-coldfield"]
};

// Helper to get safe related locations
export const getRelatedLocations = (slug) => {
  return birminghamRelatedLocations[slug] || 
         birminghamRelatedLocations.default;
};