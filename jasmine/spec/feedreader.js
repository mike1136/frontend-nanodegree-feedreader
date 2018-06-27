/** feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/** We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
   
    describe('RSS Feeds', function () {
        /**
         * Verifies that the "allFeeds" variable is defined and allFeeds not to be empty
         */
        it('are defined', function (done) {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
            done();
        });

        /**
         *  Verifies that all feeds have URL defined and not empty
         */
          it('have URLs', function () {
            allFeeds.forEach(feed => {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
    
            });
        });

    /**
     * Verifies that all feeds have names defined and not empty 
     */
     
        it('have names', function () {
            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
    
            });
        });
    });


    describe('The Menu', function () {
       /**
        * Verifies that the  menu is hidden when the page loads
        */
        it('is hidden by default', function () {

            expect($('body').hasClass('menu-hidden')).toBe(true)
            ;

        });
      /**
       * Verifies that the menu get unhidden and back to hidden again
       */
        it('changes from hidden to visible when clicked', function () {
            menuIcon = $('.menu-icon-link');
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            menuIcon.click();
            expect(expect($('body').hasClass('menu-hidden')).toBe(true));

        });



    });

    describe('Initial Entries',
        function () {
            /**
             * For Asynchonious usage
             */
            beforeEach(function (done) {
                loadFeed(0, function () {
                    done();
                });
            });
          /**
           * makes sure the function is loaded 
           */
            it('Should run the loadFeed function',
                function () {
                    spyOn(window, 'loadFeed');
                    loadFeed(0);
                    expect(window.loadFeed).toHaveBeenCalled();
                }
            );

            it('Should have an object inside of it ', function () {
                container = document.querySelector('.feed .entry');
                expect(container).not.toBe(0);
            });
        });

    describe('New Feed Selection', 
    function () {
        beforeEach(function(done){

            loadFeed(0, function(){
            
                oldfeed =$('.feed').html();
            
                loadFeed(1, function() {
            
                      newFeed =$('.feed').html();        
            
                       done() ;
                  });
             });
            });
       /** Makes sure that that it loads different feed each time */
            it('should be different each time feed is loaded', function () {
                expect(oldfeed).not.toEqual(newFeed);
            });
        
    });
});