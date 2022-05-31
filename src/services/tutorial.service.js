import http from "../http-common";
class tutorialDataservice{
    getAll(){
        return http.get("/tutorials");
    }
    get(id){
        return http.get('/tutorials/${id}');

    }
    create(data){
        return http.post("tutorials",data);
    }
    update(id,data){
        return http.put(`/tutorials/${id}`,data);
    }
    delete(id){
        return http.delete('/tutorial/${id}');
    }
    deleteAll(){
        return http.delete('/tutorials');
    }
    findByTital(title){
        return http.get('/tutorials?title=${title}');
    }
}
export default new tutorialDataservice();