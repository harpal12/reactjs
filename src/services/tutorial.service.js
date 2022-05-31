import http from "../http-common";
// import ITutorialData from "../types/tutorials.types";
class TutorialDataService {
    getAll()
    {
        return http.get("/tutorials");
    }
    get(id)
    {
        return http.get(`/tutorials/${id}`);
    }
    create(data) {
        return http.post("/tutorials",data);
    }
    update(id,data){
        return http.put(`/tutorials/${id}`,data);
    }
    delete(id)
    {
        return http.delete(`/tutorials/${id}`); 
    }
    deleteAll(id)
    {
        return http.delete(`/tutorial`); 
    }
    findByTitle(title)
    {
        return http.get(`/tutorial?title=${title}`); 
    }

}

export default new TutorialDataService();