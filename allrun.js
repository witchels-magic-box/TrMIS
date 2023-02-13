import http from "k6/http";
import { sleep, check } from "k6";
import trainee from "./trainee.js";
import trainer from "./trainer.js";

export default function() {
    trainee();
    // runTestTwo();
};