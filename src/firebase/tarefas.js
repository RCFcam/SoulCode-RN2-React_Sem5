// O propósito deste arquivo é ter todas as funções
// necessárias para gerenciar tarefas (CRUD - Create, Read, Update, Delete):
// - adicionar uma nova tarefa (Create)
// - listar as tarefas (Read)
// - atualizar uma tarefa (Update)
// - deletar uma tarefa (Delete)

import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./config";

// criar uma referencia para a coleção no firestore:
export const tarefascol = collection(db,"tarefas");
// Função assincrona = 
// Haverá uma "espera" :
export async function addTarefa(data) {
    //Essa função se comunica com o firestone, envia os dados:
    //e salva a coleção:
    await addDoc(tarefascol, data);
    // await => é uma função para esperar o resultado de addDoc:
}

// 

export async function getTarefas() {
    // Snapshot é o resultado da busca na coleção de tarefas:
    const snapshot = await getDocs(tarefascol);
    const tarefas = [];
    
    // Percorremos cada documento da coleção e inserimos no 
    // array de tarefas : 

    snapshot.forEach((doc) => {
        tarefas.push({ ...doc.data(), id: doc.id });
    });
    return tarefas;
}

