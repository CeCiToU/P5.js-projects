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

    // Have to calculate percentage of how much black is under the thread. 0% => white; 100% => black
    CalculateThreadScore(currentThread) {

        // Extract the coordinates of the start and end nails
        // Coordinates of the head nail
        const startX = currentThread.startNail.x;
        const startY = currentThread.startNail.y;
        // Coordinates of the tail nail
        const endX = currentThread.endNail.x;
        const endY = currentThread.endNail.y;
    
        // Define the number of points to sample along the thread
        const numPoints = 100; // Adjust this number as needed
        //const threadLength = dist(startX, startY, endX, endY);
    
        let blackCount = 0; // Count of black pixels
        
        for (let i = 0; i < numPoints; i++) {
            // Calculate the coordinates of the point along the thread
            const x = lerp(startX, endX, i / numPoints);
            const y = lerp(startY, endY, i / numPoints);
    
            // Check if the pixel at (x, y) is black (you can define a threshold)
            //const pixelColor = get(int(x), int(y));
            var pixelColor = [random(0,255), random(0, 255), random(0, 255), random(0, 255)];

            const threshold = 100; // Adjust this threshold
            if (red(pixelColor) < threshold || green(pixelColor) < threshold || blue(pixelColor) < threshold) {
                blackCount++;
            }
        }
        
    
        // Calculate the percentage of black pixels under the thread
        const threadLength = dist(startX, startY, endX, endY);
        const blackPercentage = (blackCount / numPoints) * 100;
    
        // Assign the score to the thread
        currentThread.threadScore = blackPercentage;
    
        return blackPercentage;
    }
}