#General answers

##Problem 1
*I. In general, how would you go about testing the correctness of the results*
*provided by this service? What tools or frameworks would you use to automate*
*the testing? At what level(s) of granularity would you test the service, and why?*

Ad I. The approach is demonstrated by the test_integration.js file. In general, the test should
cover positive scenarios and negative scenarios. Each of this test sets would cover
a) parameterized API calls
b) parse the response and evaluate the expected outcomes
The tools/frameworks strongly depends on system implementation language, but because the DNA Nexus'
systems are written in nodeJS, a good choice could be mochaJS (https://mochajs.org)

To define common dictionary, the granularity usually covers
* unit tests - implemented by developers. Here a tester should have a consulting role (mostly due to rapidly changing code 
and/or their unfamiliarity with the code 
* component tests / integration tests - this phase/level could involve mocked data/API's response. Lets consider 
a situation where teams A and B develop components A-comp and B-comp. At the end both components should interact. 
Component A-comp is delivered first (the component reads
from a component B, which does not exist yet). Therefore a mocked interface could be introduced which would allow testers
to have test sets that covers (hopefully) branch coverage of the component. Later, when the component B-comp is delivered 
(and if senseful, it can be tested with mocked data as well), both the A- and the B-comp are tested together. 
* system tests - this level should ensure the application runs on given environment. Smaller amount of tests than in previous level
* acceptance test - performed by customers, supported by testers (test execution demo and test execution support, 
eventually data verification). Testers could provide selected test steps form functional, integration and system tests to the customers/product owners 
(and additional support if required) and cooperate with the customers and interpret their feedback internally to the Product Owners  

Nevertheless, to answer the granularity question for this particular example, the intergration 
tests should be the focus here. Why? The system requirements are unknown and based on the described behaviour, 
one can assure to test HTTP GET method calls and responses only.


*II. What are some of the specific test cases you would create? (You do not need to*
*write code; just describe them.) Be sure to consider the handling of both valid and*
*invalid queries.*

See test\test_integration.js for a rough test description
 
*III. The performance of the system must be adequate for real-time interactive use.*
*How would you measure the performance (response time) of the service? What*
*factors or parameters might affect response time? Over what range of these*
*parameters would you measure performance?*

See test\test_performance.js for a rough test(measurement) description

*IV. How would you analyze the scalability of the system? I.e., the way the system*
*responds to increasing load (for example, large numbers of simultaneous queries).*

Reuse measurements from test_performance in initial case. Better suited tool, which provides more
analytical features for stress and load testing would be adequate (e.g. jMeter, LoadUI, LoadRunner). 
In general, when the scalable test environment is ready, a given amount of nodes with a given script would be
orchestrated in a way that at a given time, the nodes would start to perform queries on the SUT. The nodes count
could increase or decrease to reflect real-world like  behaviour and the SUT performance should stay within
a predefined performance values
