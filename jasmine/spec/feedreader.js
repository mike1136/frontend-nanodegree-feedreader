/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function (done) {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
            done();
        });

        /* DONE: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */ it('have URLs', function () {
            allFeeds.forEach(feed => {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
    
            });
        });

    /* DONE: Write a test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */
        it('have names', function () {
            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
    
            });
        });
       

    });

    /* DONE: Write a new test suite named "The menu" */
    describe('The Menu', function () {
        /* DONE: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        var bodyElement = document.body;
        it('is hidden by default', function () {

            expect(bodyElement).toBeDefined();
            expect(bodyElement.classList).toContain('menu-hidden');

        });
        /* DONE: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('changes from hidden to visible when clicked', function () {
            menuIcon = $('.menu-icon-link');
            menuIcon.click();
            expect(bodyElement).toBeDefined();
            expect(bodyElement.classList).not.toContain('menu-hidden');
            menuIcon.click();
            expect(bodyElement.classList).toContain('menu-hidden');

        });



    });
    /* DONE: Write a new test suite named "Initial Entries" */
    describe('Initial Entries',
        function () {
            beforeEach(function (done) {
                loadFeed(0, function () {
                    done();
                });
            });
            /* DONE: Write a test that ensures when the loadFeed
             * function is called and completes its work, there is at least
             * a single .entry element within the .feed container.
             * Remember, loadFeed() is asynchronous so this test will require
             * the use of Jasmine's beforeEach and asynchronous done() function.
             */
            it('Should run the loadFeed function',
                function () {
                    spyOn(window, 'loadFeed');
                    loadFeed(0);
                    expect(window.loadFeed).toHaveBeenCalled();
                }
            );

            it('Should have an object inside of it ', function () {
                container = document.getElementsByClassName('feed');
                expect(container[0].childElementCount).not.toBe(0);
            });
        });
    /* DONE: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', 
    function () {
        beforeEach(function (done) {
            loadFeed(0, function () {
                container = document.getElementsByClassName('feed');
                content1=container[0].children[0].text;
             
            });
            loadFeed(1, function () {
                container = document.getElementsByClassName('feed');
                content2=container[0].children[0].text;
                done();
            });
        });
        /* DONE: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

            it('should be different each time feed is loaded', function () {
                expect(content2).not.toEqual(content1);
            });
        
    });
});