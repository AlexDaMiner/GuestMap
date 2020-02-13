class Message {
  constructor(content, lon, lat) {
    this.content = content;
    this.lon = lon;
    this.lat = lat;
  }

  getContent(){
    return this.content;
  }

  getLat(){
    return this.lat;
  }
  
  getLon(){
    return this.lon;
  }
}

module.exports = {
  Message
}