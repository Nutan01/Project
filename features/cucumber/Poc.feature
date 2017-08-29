
Feature: Login credentials

  In order to three different roles
  As Admin,Member,coordinator
  I want to do login ,logout and other functionalities

  Scenario: Login with admin credentials

      Given that I am on http://localhost:49159/login
     
      When I fill in username and password with Admin001 and @123
      Then I press "Login" 
      When I should be on the admin page http://localhost:49159/admin
      Then I should see role "Role - Admin" 
      When I fill challengedetails with "Progarfd" , "program1" , "07-12-2018" and  "07-12-2019"
      Then I should press on Create 
      Then I click logout should see login page http://localhost:49159/login

  Scenario: Login with member credentials

      Given that for member I am on http://localhost:49159/login
     
      When I fill member username and password with Member001 and @123
      Then I enter "Login" for member
      When I should be on the member page http://localhost:49159/member
      Then I should see member role "Role - Member" 
      Then I enter logout should see login page http://localhost:49159/login

 Scenario: Login with coordinator credentials

      Given that for coordinator I am on http://localhost:49159/login
     
      When I fill coordinator username and password with Coordinator002 and @123
      Then I enter "Login" for coordinator
      When I should be on the coordinator page http://localhost:49159/challengeCoordinator
      Then I should see coordinator role "Role - ChallengeCoordinator" 
      Then I click logout for coordinator 
      
      
      

     