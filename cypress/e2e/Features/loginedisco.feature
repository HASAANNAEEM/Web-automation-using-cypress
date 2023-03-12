Feature: Login To Edsicovery 8.0

  @loginedisco
  Scenario Outline: Login to ediscovery

    When Login to Ediscovery with "<credentials>"
    And Click on widget "Case List"

    Examples:
      | credentials |colcase            | evidencedetails          |column    |
      | admin       |PRECIOUSProcessing |evidendetailsofexportfile |Case Name |
