module.exports = {
  queryHelp(data){
    let res;
    data.length > 1 ? res = data : res = data[0];
    return res;
  }
}
