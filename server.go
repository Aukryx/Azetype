package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
	"time"
)

func main() {
	const port = ":8080"
	http.HandleFunc("/", Home)
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))
	fmt.Println("(http://localhost:8080) - Server started on port", port)
	server := &http.Server{
		Addr:              port,              //adresse du server (le port choisi est à titre d'exemple)
		ReadHeaderTimeout: 10 * time.Second,  // temps autorisé pour lire les headers
		WriteTimeout:      10 * time.Second,  // temps maximum d'écriture de la réponse
		IdleTimeout:       120 * time.Second, // temps maximum entre deux rêquetes
		MaxHeaderBytes:    1 << 20,           // 1 MB // maxinmum de bytes que le serveur va lire
	}
	if err := server.ListenAndServe(); err != nil {
		log.Fatal(err)
	}
}

func RenderTemplate(w http.ResponseWriter, tmpl string, data interface{}) {
	page, err := template.ParseFiles("templates/" + tmpl + ".html")
	if err != nil {
		w.WriteHeader(404)
		http.Error(w, "error 400", http.StatusBadRequest)
		log.Printf("error template %v", err)
		return
	}
	err = page.Execute(w, nil)
	if err != nil {
		http.Error(w, "Error 500, INternal server error", http.StatusInternalServerError)
		log.Printf("error template %v", err)
		return
	}
}

func Home(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/" {
		RenderTemplate(w, "error404", nil)
	} else {

		RenderTemplate(w, "index", nil)
	}
}
