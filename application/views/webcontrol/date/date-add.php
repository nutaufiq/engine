<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <section class="content-header">
    <h1>
      Date
      <small>Add New</small>
    </h1>
    <ol class="breadcrumb">
      <li><a href="<?php echo site_url(); ?>home"><i class="fa fa-dashboard"></i> Home</a></li>
      <li><a href="<?php echo site_url(); ?>webcontrol/date">Date</a></li>
      <li class="active">Add New</li>
    </ol>
  </section>

  <!-- Main content -->
  <section class="content">
    <div class="row">
      <!-- left column -->
      <div class="col-md-12">
        <!-- general form elements -->
        <div class="box box-primary">
          <div class="box-header with-border">
            <h3 class="box-title">Date Form</h3>
          </div><!-- /.box-header -->
          <!-- form start -->
          <?php
            $attributes = array('role' => 'form', 'id' => 'form-ajax');
            echo form_open('webcontrol/date/add');
          ?>
            <div class="box-body">
              <div class="form-group">
                <?php echo form_label('Date Area', 'date_area'); ?>
                <?php
                  $options = array( '0' => 'Choose Area' );

                  foreach($area as $row)
                  {
                    $options[$row['id']] = $row['area'];
                  }

                  $data = array(
                    'class'        => 'form-control'
                  );

                  echo form_dropdown('date_area', $options, set_value('date_area'), $data);
                ?>
                <?php echo form_error('date_area'); ?>
              </div>
              <div class="form-group">
                <?php echo form_label('Date', 'date_name'); ?>
                <?php
                  $data = array(
                    'id'            => 'date_name',
                    'class'         => 'form-control',
                    'name'          => 'date_name',
                    'placeholder'   => 'Date'
                  );
                  echo form_input($data, set_value('date_name'));
                ?>
                <?php echo form_error('date_name'); ?>
              </div>
            </div><!-- /.box-body -->

            <div class="box-footer">
              <?php
                $data = array(
                  'id'            => 'btn-submit',
                  'class'         => 'btn btn-primary',
                  'name'          => 'btn-submit',
                  'type'          => 'submit',
                  'content'       => 'Save'
                );
                echo form_button($data);
              ?>
            </div>

            <?php
              if($this->session->flashdata('warning'))
              {
                echo $this->session->flashdata('warning');
              }
            ?>

          <?php
            echo form_close();
          ?>
        </div><!-- /.box -->
      </div><!--/.col (left) -->
    </div><!-- /.row -->
  </section><!-- /.content -->

</div><!-- /.content-wrapper -->