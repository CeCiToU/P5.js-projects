class Thread {
    
    // The start of the thread
   startNail;
   // The end of the thread
   endNail;
   // Thread score of covver
   threadScore;
   // Boolean: is ordered yet
   ordered;

    constructor(startNail, endNail) {
        this.startNail = startNail;
        this.endNail = endNail;
        this.threadScore = 0;
        this.ordered = false;
    }

    CalculateThreadScore(currentThread){
        // Have to calculate percentage of how much black is under the thread. 0% => white; 100% => black
    }
}