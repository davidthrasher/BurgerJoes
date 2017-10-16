import axios from "axios";

export default {
  // Gets menu
  getMenus: function() {
    return axios.get("/api/menu");
  },
  // Gets the menuItem with the given id
  getMenuItem: function(id) {
    return axios.get("/api/menu/" + id);
  },
  // Deletes the menuItem with the given id
  deleteMenuItem: function(id) {
    return axios.delete("/api/menu/" + id);
  }
};
